import PropTypes from 'prop-types';
import Footer from '../Footer';

import Meta from '../meta';
import { SITE_URL } from '../../lib/constants';

function Layout({ meta, children }) {
  return (
    <>
      <Meta title={meta.title} desc={meta.desc} canonical={`${SITE_URL}/${meta.path}`} />
      {/* TODO: add canonical URL logic to cope with a) root path slash,
        b) ensure paths and site_url can be passed with or without slash,
        c) option to make consistent slashed or non-slashed URLs */}
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
