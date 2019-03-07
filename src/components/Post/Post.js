import React from 'react';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import ReadMore from './ReadMore';
import styles from './Post.module.scss';

import Author from '../Author';
import SubscribeForm from '../SubscribeForm';
import Share from '../Share';

const Post = ({ post }) => {
  const {
    tags,
    title,
    disqusIdentifier,
    date,
    description,
    next,
    prev,
    slug,
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>
      <div className={styles['post__content']}>
        <Content body={html} title={title} subtitle={description} />
      </div>

      <div className={styles['post__subscribeForm']}>
        <SubscribeForm large />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <ReadMore prev={prev} next={next} />
        <div className={styles['post__authorContainer']}>
          <Author showBio />
        </div>
        <Share url={slug} title={title} />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={title} identifier={disqusIdentifier} />
      </div>
    </div>
  );
};

export default Post;
