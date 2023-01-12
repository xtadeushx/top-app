import { FC, useState } from 'react';
import axios from 'axios';
import { Button, Htag, Paragraph, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import { IMenuItem } from '../interfaces/menu.interface';

const Home: FC<IHomeProps> = ({ menu, firstCategory }): JSX.Element => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    console.log(menu[1]._id?.secondCategory);
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
            <ul>
                {menu.map((el) => (
                    <li key={el?._id?.secondCategory}>
                        {el?._id?.secondCategory}
                    </li>
                ))}
            </ul>
        </>
    );
};
export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
    const URL = 'http://localhost:5000/menu';
    const firstCategory = 0;
    const { data: menu } = await axios.get<IMenuItem[]>(URL);
    return {
        props: {
            menu,
            firstCategory,
        },
    };
};

interface IHomeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
}
