import React from 'react';

function Footer() {
  return (
    <footer className="bg-[rgb(102,34,0)] text-[rgb(255,233,209)] py-4 text-center">
      <p>&copy; {new Date().getFullYear()} DALTON BURKHART. All Rights Reserved. Some information may take up to a minute to load.</p>
    </footer>
  );
}

export default Footer;
