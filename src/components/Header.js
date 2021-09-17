import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt='Facebook logo' />
            </div>
            <div className="header__input">
                <SearchIcon />
                <input placeholder='Search Facebook' type="text" />
            </div>
            <div className='header__center'>
                <div className="header__option header__option--active">
                    <HomeIcon fontsize='large' />
                </div>
                <div className='header__option' >
                    <FlagIcon fontSize='medium'/>
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontsize='large'/>
                </div>
                <div className='header__option'>
                    <StorefrontOutlinedIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontsize='large' />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <h4>Frankie</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
