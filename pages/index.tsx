import { Button, Htag, Paragraph, Tag } from '../components';

export default function Home(): JSX.Element {
    return (
        <div>
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
        </div>
    );
}
