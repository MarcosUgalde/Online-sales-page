import { Link, useRoute } from "wouter";
import { useState } from "react";

const CustomLink = ({ href, children }) => {
    const [isActive] = useRoute(href)

    return (
        <Link {... { href }}>
            <a {...{ href, isActive }}>{children}</a>
        </Link>
    )
}

const NavBar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const toggleDropDown = () => {
        setIsDropDownOpen((prev) => !prev)
    }

    return (
        <nav>
            
        </nav>
    )
}