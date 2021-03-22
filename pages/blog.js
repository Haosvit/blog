import Container from '@/components/Container';
import PostLink from '@/components/PostLink';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { useState } from 'react';

export default function Blog({ posts }) {
    const [searchKeys, setSearchKeys] = useState('');
    const filteredBlogPosts = posts.filter((frontMatter) =>
        frontMatter.title?.toLowerCase()?.includes(searchKeys.toLowerCase())
    );

    return (
        <Container>
            <input
                placeholder="Search"
                value={searchKeys}
                onChange={(e) => setSearchKeys(e.target.value)}
            />
            {!filteredBlogPosts.length && <p>No results.</p>}
            {filteredBlogPosts.map(({ title, summary, publishedAt, slug }) => (
                <PostLink
                    key={title}
                    title={title}
                    publishedAt={publishedAt}
                    summary={summary}
                    slug={slug}
                />
            ))}
        </Container>
    );
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog');

    return { props: { posts } };
}
