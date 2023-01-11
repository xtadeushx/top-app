import { useState } from 'react';
import { Button, Htag, Paragraph, Rating, Tag } from '../components';
import { Layout, withLayout } from '../layout/Layout';

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(0);
    return (
        <>
            <Htag tag='h1'>Hello world</Htag>
            <Button
                appearance='primary'
                arrow='down'
            >
                Primary
            </Button>
            <Button appearance='ghost'>Ghost</Button>
            <Paragraph size='m'>Hello world</Paragraph>
            <Paragraph size='s'>Hello world</Paragraph>
            <Paragraph size='lg'>Hello world lg</Paragraph>
            <Paragraph>Hello world</Paragraph>
            <Tag
                size='m'
                color='primary'
                href='#'
            >
                Primary link
            </Tag>
            <Tag
                size='m'
                color='green'
                href='#'
            >
                green link
            </Tag>
            <Tag
                size='m'
                color='red'
            >
                red
            </Tag>
            <Rating rating={2} />
            <Rating
                rating={rating}
                isEditable={true}
                setRating={setRating}
            />
        </>
    );
}
export default withLayout(Home);
