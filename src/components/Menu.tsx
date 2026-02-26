'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { role } from "../lib/data";

type Role = "admin" | "teacher" | "student" | "parent";

interface MenuItem {
  icon: string;
  label: string;
  href: string;
  visible: Role[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuItems: MenuSection[] = [
  {
    title: "MENU",
    items: [
      { icon: "/home.png", label: "Home", href: "/", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/teacher.png", label: "Teachers", href: "/list/teachers", visible: ["admin", "teacher"] },
      { icon: "/student.png", label: "Students", href: "/list/students", visible: ["admin", "teacher"] },
      { icon: "/parent.png", label: "Parents", href: "/list/parents", visible: ["admin", "teacher"] },
      { icon: "/subject.png", label: "Subjects", href: "/list/subjects", visible: ["admin"] },
      { icon: "/class.png", label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },
      { icon: "/lesson.png", label: "Lessons", href: "/list/lessons", visible: ["admin", "teacher"] },
      { icon: "/exam.png", label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/assignment.png", label: "Assignments", href: "/list/assignments", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/result.png", label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/attendance.png", label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/calendar.png", label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/message.png", label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/announcement.png", label: "Announcements", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "/profile.png", label: "Profile", href: "/profile", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/setting.png", label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
      { icon: "/logout.png", label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-6 px-4 text-sm">
      {menuItems.map((section) => {
        const filteredItems = section.items.filter((item) =>
          item.visible.includes(role as Role)
        );

        if (!filteredItems.length) return null;

        return (
          <div key={section.title} className="mb-6">
            <p className="hidden lg:block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
              {section.title}
            </p>

            <ul className="flex flex-col gap-1">
              {filteredItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center justify-center lg:justify-start gap-4
                        px-3 py-2 rounded-lg transition-all duration-200
                        ${
                          isActive
                            ? "bg-blue-100 text-blue-600 font-medium"
                            : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        }
                      `}
                    >
                      <Image
                        src={item.icon}
                        height={22}
                        width={22}
                        alt={item.label}
                      />
                      <span className="hidden lg:block">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;