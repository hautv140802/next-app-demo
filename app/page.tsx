import paths from "@/constants/paths";
import Link from "next/link";

export default function Home() {
  const menus = [
    {
      label: "Form nested form",
      path: paths.FORM_NESTED_FORM,
    },
  ];
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto w-full">
      <h1 className="text-lg font-bold uppercase text-center">Menu</h1>

      <ul className="flex flex-col gap-5 list-decimal">
        {menus.map((menu, index) => (
          <li key={index}>
            <Link
              className="text-base text-blue-500 underline"
              href={menu.path}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
