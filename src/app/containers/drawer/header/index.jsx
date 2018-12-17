import React from 'react'
import PropTypes from 'prop-types'
import { inject as injectStore } from 'mobx-react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import Link from 'react-router-dom/Link'
import withStyles from '@material-ui/core/styles/withStyles'
import logoUrl from '@app/assets/images/logo.svg'

const styles = (theme) => ({
  container: {
    position: 'absolute',
    padding: theme.spacing.unit * 3,
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 300,
  },
})

const DrawerHeader = ({ classes, app }) =>
  <Grid
    container
    justify='space-between'
    alignItems='center'
    className={classes.container}>
    <Grid item xs={4}>
      <Link to='/' onClick={app.clearDictionaryId}>
        <Slide direction='down' in={true} timeout={400} mountOnEnter unmountOnExit>
          <img src={logoUrl} />
        </Slide>
      </Link>
    </Grid>
    <Grid item xs={3}>
      <Slide direction='down' in={true} timeout={400} mountOnEnter unmountOnExit>
        <Typography
          variant='body2'
          color='textSecondary'
          className={classes.title}>
          Словари
        </Typography>
      </Slide>
    </Grid>
  </Grid>

DrawerHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
}

export default injectStore('app')(withStyles(styles)(DrawerHeader))
