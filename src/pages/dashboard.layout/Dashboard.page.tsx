import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { UnstyledButton, Tooltip, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './Dashboard.module.css';
import Logo from '@/components/logo';
import MainLogoIcon from '../../images/logos/siteicon/android-chrome-512x512.png';
import LogoIcon2 from '../../images/logos/logo2.png';
import LogoIcon3 from '../../images/logos/logo2.png';

const mainLinksMockdata = [
  { icon: LogoIcon2, label: 'Home company' },
  // { icon: IconGauge, label: 'Dashboard' },
];

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
];

/**
 * Renders the Dashboard page component.
 *
 * @returns The rendered Dashboard page component.
 */
export default function DashboardPage() {
  const [active, setActive] = useState('Releases');
  const [activeLink, setActiveLink] = useState('Settings');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <Logo src={link.icon} size="sm" color="cyan" />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <a
      className={classes.link}
      data-active={activeLink === link || undefined}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <div className={classes.wrapper}>
          <div className={classes.aside}>
            <div className={classes.logo}>
              <Logo src={MainLogoIcon} size="" />
            </div>
            {mainLinks}
            <Tooltip label="add" position="right" withArrow transitionProps={{ duration: 0 }}>
              <UnstyledButton onClick={() => {}} className={classes.mainLink}>
                <IconPlus size={20} strokeWidth={1.5} />
              </UnstyledButton>
            </Tooltip>
          </div>
          <div className={classes.main}>
            <Title order={4} className={classes.title}>
              {active}
            </Title>

            {links}
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
