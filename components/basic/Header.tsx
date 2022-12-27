import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { navIsOpen } from "../../atoms/navIsOpen";
import { StyledHeader } from "../styledComponents/StyledHeader";
import { StyledLi } from "../styledComponents/StyledLi";
import { StyledLink } from "../styledComponents/StyledLink";
import { StyledNav } from "../styledComponents/StyledNav";
import { StyledUl } from "../styledComponents/StyledUl";
import { Hamburger } from "./Hamburger";

export const Header = () => {
  const [isOpen, setIsOpen] = useRecoilState(navIsOpen);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <StyledHeader>
      <StyledLink
        type="logo"
        css={{ borderRadius: "50%" }}
        onClick={handleClick}
        href="/" /* css={{ paddingLeft: "40px" }} */
      >
        <Image
          src="/assets/SquidRoeLogo.png"
          alt="Squid Roe Records Logo"
          width={70}
          height={70}
          style={{
            borderRadius: "50%",
            //boxShadow: "16px 16px 60px 10px rgba(0,0,0,0.5)",
          }}
        />
      </StyledLink>
      <Hamburger />
      <StyledNav isOpen={isOpen}>
        <StyledUl>
          <StyledLi>
            <StyledLink type="navLink" onClick={handleClick} href="/releases">
              Releases
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink type="navLink" onClick={handleClick} href="/playlists">
              Playlists
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink type="navLink" onClick={handleClick} href="/about">
              About
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink type="navLink" onClick={handleClick} href="/contact">
              Contact
            </StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};
