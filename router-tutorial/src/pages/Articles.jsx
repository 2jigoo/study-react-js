import { NavLink, Outlet } from "react-router-dom"

const Articles = () => {
    return (
        <div>
            {/* Outlet: children 렌더링 */}
            <Outlet />
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
};

const ArticleItem = ({ id }) => {
    const activeStyle = {
        color: 'green',
        fontWeight: 'bold'
    };

    return (
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                // className={}
            >
                게시글 {id}
            </NavLink>
        </li>
    );
};

export default Articles;