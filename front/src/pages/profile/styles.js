import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  accordion: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  grow: {
    flexGrow: 1,
  },
  list: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    marginBottom: theme.spacing.unit * 3,
    cursor: 'pointer',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 8,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  fullProfileFab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  img: {
    width: '100%',
    height: theme.spacing.unit * 15,
    objectFit: 'cover',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 6,
  },
  replyIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default withStyles(styles);
