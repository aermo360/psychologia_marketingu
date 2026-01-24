// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // 1. Seed Module Data if empty
    try {
      const moduleCount = await strapi.db.query("api::module.module").count();

      if (moduleCount === 0) {
        const modules = [
          {
            title: "Strategia",
            icon: "insights",
            courses: [{ name: "SEO / SEM" }, { name: "Marketing B2B" }, { name: "Strategia komunikacji" }]
          },
          {
            title: "Content i Social",
            icon: "campaign",
            courses: [{ name: "Social Media Ads" }, { name: "Branding & Design" }, { name: "Videomarketing i PR" }]
          },
          {
            title: "Technologia i AI",
            icon: "smart_toy",
            courses: [{ name: "AI w marketingu" }, { name: "E-commerce tools" }, { name: "Web Development" }]
          },
          {
            title: "Analityka i UX",
            icon: "leaderboard",
            courses: [{ name: "UX / CX Design" }, { name: "Analityka danych" }, { name: "Badania marketingowe" }]
          },
        ];

        for (const module of modules) {
          await strapi.entityService.create("api::module.module", {
            data: module
          });
        }
        console.log("Seeded initial Modules.");
      }
    } catch (e) {
      console.error("Error seeding modules:", e);
    }

    // 2.1 Seed Global Settings
    try {
      const globalSetting = await strapi.db.query("api::global-setting.global-setting").findOne();
      if (!globalSetting) {
        await strapi.entityService.create("api::global-setting.global-setting", {
          data: {
            recruitment_link: "#",
            contact_email: "marketing.podyplomowe@pwr.edu.pl",
            contact_phone: "+48 71 320 23 45",
            semester_count: "2 semestry",
            ects: "60 ECTS"
          }
        });
        console.log("Seeded Global Settings.");
      }
    } catch (e) {
      console.error("Error seeding global settings:", e);
    }

    // 2.2 Seed Lecturers
    try {
      const lecturerCount = await strapi.db.query("api::lecturer.lecturer").count();
      if (lecturerCount === 0) {
        const lecturers = [
          {
            name: "Jan Kowalski",
            role: "Ekspert SEO & Content",
            description: "Specjalista z 15-letnim doświadczeniem w branży eCommerce, prowadzący projekty dla największych marek w Polsce. Autor licznych publikacji.",
            image_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
            order: 1
          },
          {
            name: "Anna Nowak",
            role: "Strateg Marketingu",
            description: "Pasjonatka strategii komunikacji i budowania wizerunku marki w świecie cyfrowym z dorobkiem naukowym na Politechnice.",
            image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
            order: 2
          },
          {
            name: "Piotr Wiśniewski",
            role: "Social Media Specialist",
            description: "Praktyk z wieloletnim stażem w zarządzaniu kampaniami płatnymi. Optymalizuje budżety liczone w milionach złotych.",
            image_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
            order: 3
          },
          {
            name: "Marta Wójcik",
            role: "E-commerce Manager",
            description: "Ekspertka w optymalizacji procesów sprzedażowych oraz wdrażaniu nowoczesnych narzędzi technologicznych w e-handlu.",
            image_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
            order: 4
          },
          {
            name: "Tomasz Mazur",
            role: "Content Strategist",
            description: "Twórca angażujących treści i strategii contentowych, które budują trwałe relacje z klientami i napędzają organiczny wzrost.",
            image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
            order: 5
          },
          {
            name: "K. Lewandowska",
            role: "Performance Analyst",
            description: "Analityk danych zorientowany na wyniki, specjalizujący się w optymalizacji konwersji (CRO) i zwrotu z inwestycji (ROI).",
            image_url: "https://images.unsplash.com/photo-1598550832205-d5b5fe4a018b?q=80&w=1000&auto=format&fit=crop",
            order: 6
          }
        ];

        for (const lecturer of lecturers) {
          await strapi.entityService.create("api::lecturer.lecturer", {
            data: lecturer
          });
        }
        console.log("Seeded Lecturers.");
      }
    } catch (e) {
      console.error("Error seeding lecturers:", e);
    }

    // 3. Force Public Permissions (The "Dirty" Way but effective for setup)
    // We get the role again and explicitely update the permissions field if the plugin service allows
    // Note: This often requires knowing the precise permission IDs or structure. 
    // Instead, we will print a HUGE message if we can't do it.

    // Specific hack for Strapi 5 to enable public access programmatically
    try {
      const roles = await strapi.plugin('users-permissions').service('role').find();
      const publicRole = roles.find(r => r.type === 'public');

      if (publicRole) {
        // Re-fetch with permissions
        const roleWithPermissions = await strapi.plugin('users-permissions').service('role').findOne(publicRole.id);
        const permissions = roleWithPermissions.permissions;

        const newPermissions = {
          ...permissions,
          'api::module': { controllers: { module: { find: { enabled: true }, findOne: { enabled: true } } } },
          'api::global-setting': { controllers: { 'global-setting': { find: { enabled: true }, findOne: { enabled: true } } } },
          'api::lecturer': { controllers: { lecturer: { find: { enabled: true }, findOne: { enabled: true } } } }
        };

        await strapi.plugin('users-permissions').service('role').updateRole(publicRole.id, {
          permissions: newPermissions
        });
        console.log("Public permissions updated programmatically.");
      }
    } catch (e) {
      console.log("Could not auto-set permissions. Please do so in Admin Panel.");
    }
  },
};
