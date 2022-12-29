import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IOffer} from "../../../../../shared/model/offer.model";
import {
    getBaseImageUrl,
    getFullnameUser,
    getImageForOffer,
    getUserAvatar
} from "../../../../../shared/utils/utils-functions";
import {AllAppConfig} from "../../../../../core/config/all-config";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import {useNavigate} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../../../../core/config/all-app-routes";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function PubPerMonth({advertising}: {advertising: IOffer}) {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const rediretTo = () => {
        setTimeout(() => {
            navigate(ALL_APP_ROUTES.DETAILS_OFFER + "/" + advertising.id);
        }, 300);
    }
    return (
        <CardActionArea component="a" onClick={() => rediretTo()}>
            <Card sx={{ mb: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar
                            alt={advertising.user?.imageUrl}
                            src={getUserAvatar(
                                advertising.user?.id,
                                advertising.user?.imageUrl,
                                advertising.user?.sourceConnectedDevice
                            )}
                            sx={{ border: "1px solid #b9b9b9" }}
                        >
                            {getFullnameUser(advertising.user)?.charAt(0)}
                        </Avatar>
                    }
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={advertising?.title}
                    subheader="September 14, 2016"
                />
                {
                    advertising?.offerImages?.length ?
                        <CardMedia
                            component="img"
                            height="194"
                            image={getImageForOffer(advertising.id, advertising.offerImages[0].path)}
                            alt="Paella dish"
                        /> :
                        <CardMedia
                            component="img"
                            height="194"
                            image={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)}
                            alt="Paella dish"
                        />
                }
                <CardContent>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                advertising?.description ||
                                "",
                        }}
                    ></div>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is absorbed,
                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                            mussels, tucking them down into the rice, and cook again without
                            stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </CardActionArea>
    );
}
