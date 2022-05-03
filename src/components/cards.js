import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>

            <Stack direction="column" spacing={2} marginLeft={2} marginRight={2} >


                <div>
                    <Card sx={{ maxWidth: 945 }} >
                        <CardHeader

                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="See a behemoth black hole and spiral galaxy like only the Hubble telescope can"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image=
                            {require('./imgs/img1.jpg')}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                See a behemoth black hole and spiral galaxy like only the Hubble telescope can
                            </Typography>
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
                                <Typography paragraph>More info:</Typography>
                                <Typography paragraph>
                                    The galaxy, called M91, is located approximately 55 million light-years from Earth in the constellation Coma Berenices. It is a barred spiral galaxy, boasting a prominent central bar-shaped structure composed of bright stars.

                                    However, behind the galaxy's central bar lies a behemoth black hole that weighs somewhere between 9.6 and 38 million times as much as the sun, according to a statement from the European Space Agency (ESA), which is a partner on the Hubble Space Telescope.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div >
                <div>
                    <Card sx={{ maxWidth: 945 }} >
                        <CardHeader

                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Japan's asteroid samples faced surprise challenges on Earth: A pandemic, traffic jams and airport security"
                            subheader="june 14, 2006"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image=
                            {require('./imgs/img2.jpg')}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Collecting rocks from an asteroid is rocket science; getting them to the lab is another story.

                                Take Japan's Hayabusa2 mission, which launched in 2014 to grab pieces of a near-Earth asteroid called Ryugu and delivered those samples to Earth in December 2020.
                            </Typography>
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
                                    Even when the space rocks reached Japan, the traveling wasn't quite over. That's because some of the asteroid material had another flight to catch in order to reach NASA's Astromaterials Research and Exploration Science (ARES) center at Johnson Space Center (JSC) in Texas.

                                    This trip didn't need any rocket fuel, but that doesn't mean it was easy. "This one is, I would say, a really big deal," Keiko Nakamura-Messenger, who until last month was a cosmochemist at JSC, told Space.com. "This is the first time that we did international samples li
                                    ke this."
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>

                </div>
                <div>
                    <Card sx={{ maxWidth: 945 }} >
                        <CardHeader

                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="NASA's Psyche asteroid spacecraft passes shake-and-bake test and meets the press"
                            subheader="octomber 1, 2009"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image=
                            {require('./imgs/img3.jpg')}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                NASA received a few grains of asteroid dust from Japan's predecessor mission, Hayabusa, which delivered samples from an asteroid called Itokawa in 2010. However, that spacecraft faced serious challenges during the actual mission and ended up bringing very little material back to Earth.

                            </Typography>
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
                                    NASA received a few grains of asteroid dust from Japan's predecessor mission, Hayabusa, which delivered samples from an asteroid called Itokawa in 2010. However, that spacecraft faced serious challenges during the actual mission and ended up bringing very little material back to Earth.

                                    Hayabusa2 was more successful, bringing 0.2 ounces (5.4 grams) — 50 times the target amount — of precious asteroid cargo to Earth in a capsule that landed in the Australian desert in December 2020. As a partner on the mission, NASA was to receive 10% of that to add to its collection of moon rocks, meteorites and other celestial material held at JSC.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>

                </div>
                <div>
                    <Card sx={{ maxWidth: 945 }} >
                        <CardHeader

                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image=
                            {require('./imgs/img4.jpg')}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Hayabusa2 wasn't the only asteroid-sampling mission of recent years; NASA's OSIRIS-REx spacecraft grabbed rocks from another near-Earth asteroid, called Bennu, in October 2020. That mission is now on its way home to deliver the samples in September 2023. That delivery will land in the Utah Test and Training Range (UTTR), as previous NASA missions have in the past — most recently, the 2006 return of the Stardust comet-sampling mission.

                            </Typography>
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
                                    Hayabusa2 wasn't the only asteroid-sampling mission of recent years; NASA's OSIRIS-REx spacecraft grabbed rocks from another near-Earth asteroid, called Bennu, in October 2020. That mission is now on its way home to deliver the samples in September 2023. That delivery will land in the Utah Test and Training Range (UTTR), as previous NASA missions have in the past — most recently, the 2006 return 
                                    
                                The explosive-studded range is the first stop for fresh celestial materials on Earth despite its hazards because it is the largest secure area in the central United States. "There are areas that we cannot step in because it's too
                                    of the Stardust comet-sampling mission.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>

                </div>
                <div>
                    <Card sx={{ maxWidth: 945 }} >
                        <CardHeader

                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Largest treasure trove of exocomets to date found in alien solar system"
                            subheader="September 10, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image=
                            {require('./imgs/img5.jpg')}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                lor
                            </Typography>
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
                                <Typography paragraph>Description:</Typography>
                                <Typography paragraph>
                                hirty alien comets have been spotted transiting the young star Beta Pictoris, their long tails lighting up the skies of the fledgling planets forming there
                                </Typography>
                                <Typography paragraph>.

The comet discovery has been made using NASA's Transiting Exoplanet Survey Satellite (TESS), which watches for dips in starlight as planetary bodies pass in front of — or transit — their star. Beta Pictoris, which is 63.4 light years away, is home to a dusty planet-forming disk that was discovered back in 1983 by IRAS, the Infrared Astronomy Satellite. The disk contains at least two planets, both gas giants, and spectral observations gathered as long ago as 1987 suggested evidence for comets (or 'falling evaporating bodies' as they were referred to at the time) releasing dust and gas into the disk. 

In 2019, astronomers led by Sebastian Zieba, of the University of Innsbruck in Austria, used TESS to discover three 'exocomets' transiting Beta Pictoris. Now, another team, led by astronomer Alain Lecavelier des Etangs, of the Institut d'Astrophysique de Paris in France, has observed 30 exocomets in the Beta Pictoris system, including the three previously discovered.


                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>

                </div>
                <div>
                    <Card sx={{ maxWidth: 945 }} >
                        <CardHeader

                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Odds of Life on Newfound Earth-Size Planet '100 Percent,' Astronomer Says"
                            subheader="April 02, 2022"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image=
                            {require('./imgs/img6.jpg')}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Thisstory was updated at 8:58 p.m. ET.

An Earth-size planet has been spotted orbiting a nearby star at a distance that would makes it not too hot and not too cold — comfortable enough for life to exist, researchers announced today (Sept. 29).

If confirmed, the exoplanet, named Gliese 581g,  would be the first Earth-like world found residing in a star's habitable zone a region where a planet's temperature could sustain liquid water on its surface.
                            </Typography>
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
                                <Typography paragraph>       Thisstory was updated at 8:58 p.m. ET.

An Earth-size planet has been spotted orbiting a nearby star at a distance that would makes it not too hot and not too cold — comfortable enough for life to exist, researchers announced today (Sept. 29).

If confirmed, the exoplanet, named Gliese 581g,  would be the first Earth-like world found residing in a star's habitable zone a region where a planet's temperature could sustain liquid water on its surface.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>

                </div>








            </Stack>


        </>
    );
}
