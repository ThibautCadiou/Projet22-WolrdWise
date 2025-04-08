import { NavLink } from 'react-router';

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>Homepage</NavLink>
        </li>
        <li>
          <NavLink to={'/product'}>Product</NavLink>
        </li>
        <li>
          <NavLink to={'/pricing'}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={'/other'}>Other</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
