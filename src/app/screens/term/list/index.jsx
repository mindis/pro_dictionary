import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Link from 'react-router-dom/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const
  styles = (theme) => ({
    itemSubTitle: {
      [theme.breakpoints.down('xl')]: {
        maxWidth: 1200,
      },
      [theme.breakpoints.down('lg')]: {
        maxWidth: 600,
      },
      [theme.breakpoints.down('md')]: {
        maxWidth: 400,
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 200,
      },
    },
  }),
  listItemTypographyPropsPreset = (className) => ({ noWrap: true, className })

const TermListItem = ({ term, fullTerm, childrens, listItemTypographyProps }) =>
  <>
    <ListItem button component={Link} to={`/${fullTerm}`}>
      <ListItemText
        primary={term}
        secondary={childrens && childrens.join(', ')}
        secondaryTypographyProps={listItemTypographyProps} />
      <ListItemSecondaryAction>
        <IconButton aria-label='Edit'>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
  </>

TermListItem.propTypes = {
  term: PropTypes.string.isRequired,
  fullTerm: PropTypes.string.isRequired,
  childrens: PropTypes.instanceOf(Object),
  listItemTypographyProps: PropTypes.object.isRequired,
}

const TermListFlatItem = ({ term }) =>
  <>
    <ListItem>
      <ListItemText primary={term}/>
      <ListItemSecondaryAction>
        <IconButton aria-label='Edit'>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
  </>

TermListFlatItem.propTypes = {
  term: PropTypes.string.isRequired,
}

const TermList = ({ classes, items, isFlat }) => {
  const listItemTypographyProps = listItemTypographyPropsPreset(classes.itemSubTitle)

  return (
    <List>
      {!isFlat
      ? items.map(({ fullTerm, term, childrens }) =>
          <TermListItem
            key={term}
            term={term}
            fullTerm={fullTerm}
            listItemTypographyProps={listItemTypographyProps}
            childrens={childrens} />
        )
      : items.map(({ term }) =>
        <TermListFlatItem
          key={term}
          term={term}/>
      )}
    </List>
  )
}

TermList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array,
  isFlat: PropTypes.bool.isRequired,
}

export default withStyles(styles)(TermList)
