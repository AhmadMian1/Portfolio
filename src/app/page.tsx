import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { PortfolioSections } from "@/components/sections/portfolio-sections";
import { portfolioApi } from "@/services/api";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const isLoggedIn = Boolean(cookieStore.get("portal_user")?.value);
  const [navItems, heroRoles, stats, about, skills, experience, projects, services, testimonials, contact] =
    await Promise.all([
      portfolioApi.getNavigation(),
      portfolioApi.getHeroRoles(),
      portfolioApi.getStats(),
      portfolioApi.getAbout(),
      portfolioApi.getSkills(),
      portfolioApi.getExperience(),
      portfolioApi.getProjects(),
      portfolioApi.getServices(),
      portfolioApi.getTestimonials(),
      portfolioApi.getContactInfo(),
    ]);

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950">
      <Navbar items={navItems} showLogout={isLoggedIn} brandHref="/" />
      <main>
        <PortfolioSections
          heroRoles={heroRoles}
          stats={stats}
          about={about}
          skills={skills}
          experience={experience}
          projects={projects}
          services={services}
          testimonials={testimonials}
          contact={contact}
        />
      </main>
      <Footer socials={contact.socials} navItems={navItems} />
      <ScrollToTop />
    </div>
  );
}
