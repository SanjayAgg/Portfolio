import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Banner.module.css";

export const Banner = () => {
  return (
    <>
      <div className={`${styles.banner} md:h-max h-full relative block`}>
        <div className="max-w-screen-md mx-auto px-2 h-full flex flex-1 pt-36 pb-12 md:pb-12">
          <div
            className={`flex md:flex-row flex-col items-center justify-center text-left my-auto bg-white`}
          >
            <div className={`flex-col w-full bg-white self-start`}>
              <Image
                src={"author.jpg"}
                alt="Picture of the author"
                width={400}
                height={400}
                className="rounded"
              />
              <h3 className="text-2xl font-bold text-neutral-900 md:px-2 px-8 mt-2 md:text-center text-left">
                Sanjay Aggarwal
              </h3>
              <span className="text-xs text-gray-700 font-semibold uppercase block mt-1 md:px-2 px-8 md:text-center text-left">
                Project Manager / Sr. Deverloper
              </span>
              <div className="grid gap-2 grid-cols-10 md:p-3 px-8 py-3">
                <span className="hidden md:block">&nbsp;</span>
                <span className="hidden md:block">&nbsp;</span>
                <span className="hidden md:block">&nbsp;</span>
                <span className="hidden md:block">&nbsp;</span>
                <Link
                  href={"https://www.linkedin.com/in/sanjay-sjeetaggarwal/"}
                  target={"_blank"}
                >
                  <Image
                    src={"linkedin.png"}
                    width={18}
                    height={18}
                    alt="LinkedIn"
                  />
                </Link>
                <Link href={"mailto:sjeetaggarwal@gmail.com"}>
                  <Image src={"mail.png"} width={22} height={22} alt="email" />
                </Link>
                <span className="hidden md:block">&nbsp;</span>
                <span className="hidden md:block">&nbsp;</span>
                <span className="hidden md:block">&nbsp;</span>
                <span className="hidden md:block">&nbsp;</span>
              </div>
            </div>

            <div className={`flex-col w-full p-8 bg-white`}>
              <h2 className="text-3xl font-bold">Hello</h2>
              <p className="md:text-lg text-base font-bold mt-3">
                Here&apos;s who I am & what I do
              </p>
              <div className="grid grid-cols-2 gap-4 my-7">
                <Link
                  href={"Sanjay_Aggarwal_Developer_and_Project_Manager.pdf"}
                  className="bg-blue-700 text-white p-3 text-center rounded-full uppercase"
                  target={"_blank"}
                >
                  Resume
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/sanjay-sjeetaggarwal/"}
                  className="bg-white text-black border-2 border-black rounded-full text-center p-3 uppercase hidden"
                  target={"_blank"}
                >
                  Projects
                </Link>
              </div>
              <p className="text-sm font-normal mb-3">
                I&apos;ve 8 years of experience. Throughout my career,
                I&apos;ve had a variety of positions. I began my work as a
                wordpress developer, building websites on WordPress using paid
                themes and customising functionality based on user requirements.
              </p>
              <p className="text-sm font-normal mb-3">
                I&apos;ve spent the last five years managing teams, leading
                scrums, dealing with clients, delivering projects, and
                overseeing project planning and execution.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
