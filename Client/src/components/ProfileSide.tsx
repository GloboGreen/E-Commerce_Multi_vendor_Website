import { cn } from "@/lib/utils";
import { profilePageLinks } from "@/pages/data/links";
import { Link, useLocation } from "react-router-dom";

export default function ProfileSide() {
  const location = useLocation();
  return (
    <aside className="hidden max-h-screen w-full flex-col gap-2 lg:flex">
      <div className="my-10 flex-1">
        <nav className="group grid items-start gap-2 px-2 text-sm font-medium lg:px-4">
          {profilePageLinks.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={cn(
                "mx-2 flex items-center gap-3 rounded-lg p-2 transition-all",
                location.pathname === item.to
                  ? "bg-primary/20"
                  : "hover:bg-accent",
              )}
            >
              {item.logo}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
