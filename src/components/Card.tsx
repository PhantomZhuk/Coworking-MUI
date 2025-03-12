import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BookDialog from './BookDialog';

const MediaCard: React.FC = () => {
    return (
        <Card sx={{ width: 450 }}>
            <CardMedia
                sx={{ height: 300 }}
                image="/src/assets/photo-1527192491265-7e15c55b1ed2.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    CoWorking Hub "Synergy Space"
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    A modern coworking space offering comfortable conditions for work and collaboration. Equipped with all necessities: high-speed internet, comfortable workstations, conference rooms and relaxation areas. Perfect place for freelancers, startups and remote teams.
                </Typography>
            </CardContent>
            <CardActions>
                <div className='flex justify-between w-full'>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-xl font-bold text-red-500'>10</h2>
                        /
                        <h2 className='text-xl font-bold text-blue-500'>100</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-xl font-bold text-green-500'>$100</h2>
                        <BookDialog />
                    </div>
                </div>
            </CardActions>
        </Card>
    );
}

export default MediaCard;