import Footer from "@/components/Footer";
import Main from "@/components/Main";
import COGDataExtractor from "@/features/grades/components/COGDataExtractor";
import defaultRoutes from "@/utils/routes";
import Link from "next/link";

const About = () => {
  const routes = Object.keys(defaultRoutes);
  return (
    <>
      {/* If there is a user, hide this navigation UI. */}
      <nav className="p-2 bg-white/40 hover:bg-white/80 duration-200 ease-in-out group">
        <ul className="flex flex-row justify-between gap-2">
          {routes.map((route) => {
            return (
              <li key={route}>
                <Link href={`/${route}`} passHref>
                  <button className="capitalize font-geist-mono hover:text-green-600 duration-200 ease-in-out">
                    {route}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Main>
        <p>Hello World</p>
        <COGDataExtractor />
      </Main>
      <Footer />
    </>
  );
};

export default About;
