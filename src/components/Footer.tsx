import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTACT_INFO, FooterLinks, SOCIALS } from "@/constants";

const Footer = () => {
    return (
        <footer className="flexCenter pb-24 pt-5 mt-10 bg-slate-950">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <Image 
                            src="/assets/logo.png"
                            alt="logo"
                            width={74}
                            height={29}
                        />
                    </Link>

                    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                        {FooterLinks.map((column) => (
                            <FooterColumn key={column.name} title={column.name}>
                                <ul className="regular-14 flex flex-col gap-4 text-gray-500">
                                    {column.children.map((link) => (
                                        <Link href={link.path} key={link.path} className="hover:text-yellow-50">
                                            {link.label}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}

                        <div className="flex flex-col gap-5">
                            <FooterColumn title="Socials">
                                <ul className="regular-14 flex gap-4 text-gray-500">
                                    {SOCIALS.map((social) => (
                                        <Link href={social.path} key={social.path} target="_blank">
                                            <Image
                                                src={social.icon}
                                                alt="logo"
                                                width={28}
                                                height={28}
                                                className="w-[24px] h-[24px] hover:w-[28px] hover:h-[28px] transition-all duration-300 ease-in-out"
                                            />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                <ul className="regular-14 flex flex-col gap-4 text-gray-500">
                                    {FOOTER_CONTACT_INFO.links.map((link) => (
                                        <Link href={link.link} key={link.label} target="_blank" className="flex gap-4 md:flex-col lg:flex-row">
                                            <p className="whitespace-nowrap">
                                                {link.label}:
                                            </p>
                                            <p className="medium-14 whitespace-nowrap text-gray-50 hover:text-yellow-50">
                                                {link.value}
                                            </p>
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>

                    </div>
                </div>

                <div className="border border-gray-50"/>
                <p className="regular-14 w-full text-center text-gray-500">2024 ShakedKod | All rights reserved</p>
            </div>
        </footer>
    );
};

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
};

const FooterColumn = ({title, children}: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    );
};

export default Footer;