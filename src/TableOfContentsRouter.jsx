import { Link } from "react-router";

const pages = [{ path: "/counter-app", name: "カウンターアプリ" }];

export const TableOfContentsPage = () => {
  return (
    <ul>
      {pages.map((page) => (
        <li>
          <Link to={page.path}>{page.name}</Link>
        </li>
      ))}
    </ul>
  );
};
