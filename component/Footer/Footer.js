import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LangIcon from '@material-ui/icons/Language';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import FacebookIcon from 'react-ionicons/lib/LogoFacebook';
import InstagramIcon from 'react-ionicons/lib/LogoInstagram';
import LinkedinIcon from 'react-ionicons/lib/LogoLinkedin';
import TwitterIcon from 'react-ionicons/lib/LogoTwitter';
import hello from './footer-style';
import { makeStyles } from '@material-ui/core/styles';


const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
    link: ['#team', '#history', '#contact-us', '#locations'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    link: ['#resource', '#resource-name', '#another-resource', '#final-resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    link: ['#privacy-policy', '#terms-of-use'],
  },
];

const Jac = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    direction:"column-reverse",
  justify:"center",
  alignItems:"center",
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    '& p': {
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 3),
        textAlign: 'center'
      }
    }
  },
  title: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 48,
      marginRight: theme.spacing(),
    },
    '& h6': {
      color: theme.palette.text.disabled,
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: theme.spacing(0, 3)
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      background: theme.palette.divider,
      width: 36,
      height: 36,
      '& svg': {
        fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      }
    },
    '& svg': {
      width: 24,
      height: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)',
    }
  },
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '& $icon': {
      top: 21,
      position: 'relative',
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    maxWidth: 480,
    margin: '0 auto',
    marginTop: theme.spacing(2),
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  }
}));

const Footer = () => {
  const theme = useTheme();
  const classes = Jac();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (

    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid item xs={12} md={12} >
        <div className={classes.socmed}>
          <IconButton aria-label="Delete" className={classes.margin} size="small">
            <FacebookIcon fontSize="64" />
          </IconButton>
          <IconButton aria-label="Delete" className={classes.margin} size="small">
            <TwitterIcon fontSize="64px" />
          </IconButton>
          <IconButton aria-label="Delete" className={classes.margin} size="small">
            <InstagramIcon fontSize="64px" />
          </IconButton>
          <IconButton aria-label="Delete" className={classes.margin} size="small">
            <LinkedinIcon fontSize="64px" />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={12} md={6} >
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={12} md={3} key={footer.title} className={classes.siteMapItem}>
              {isDesktop && (
                <div>
                  <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map((item, index) => (
                      <li key={item}>
                        <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {isMobile && (
                <ExpansionPanel
                  square
                  classes={{
                    root: classes.accordionRoot,
                  }}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    classes={{
                      content: classes.accordionContent,
                    }}
                  >
                    <strong>
                      {footer.title}
                    </strong>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <ul>
                      {footer.description.map((item, index) => (
                        <li key={item}>
                          <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Container>

  );
};

export default Footer;



