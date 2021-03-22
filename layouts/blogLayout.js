import { format } from 'date-fns';
import Container from '@/components/Container';
import { formatTime } from '@/utils/time'

export default function BlogLayout({ children, frontMatter }) {
    const { title, summary, publishedAt, readingTime } = frontMatter;
    const readingTimeMinutes = Math.round(readingTime.minutes * 60);
    return (
        <Container>
            <article>
                <h1>{title}</h1>
                <span>{formatTime(publishedAt)}</span>
                <p>{summary}</p>
                <p>Reading time: {readingTimeMinutes} min(s)</p>
            </article>
            <div>{children}</div>
        </Container>
    );
}
