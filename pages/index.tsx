import Head from 'next/head';
import React from 'react';
import { Divider, Grid } from '@mui/material';
import aboutProfileImg from '@images/aboutProfileImg.jpeg';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { getDatabase } from '@utils/notion';
import { BlogPostListType } from 'notion';
import {
  Hero,
  PageContentWrapper,
  PostList,
  GlassWrapper,
  ListOfProducts,
} from '@components';
import { siteConfig } from '../constants';
import heroBg from '@images/heroBg1.jpg';
import Box from '@mui/material/Box';

const Index = ({ blogPostList }: BlogPostListType) => {
  const router = useRouter();
  const { title } = siteConfig;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero isHomePage imageSource={heroBg}>
        <GlassWrapper>
          <section>
            <Image
              src={aboutProfileImg}
              width={150}
              height={150}
              alt="Hero image"
              placeholder="blur"
              className="rounded-full"
            />
          </section>
          <section>
            <h1>{siteConfig.author.name}</h1>
            <p>{siteConfig.author.summary}</p>
          </section>
          <section>
            <Button variant="contained" onClick={() => router.push('/contact')}>
              Contact Me
            </Button>
          </section>
        </GlassWrapper>
      </Hero>
      <PageContentWrapper isPost={false}>
        {/* About Section */}
        <section>
          <h1 className="uppercase text-center">About</h1>
          <hr className="border-blue-500 max-w-[15%] mx-auto" />
          <Grid className="container mx-auto" container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image
                src={aboutProfileImg}
                alt="Hero image"
                placeholder="blur"
                className="rounded-2xl"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <p className="pt-0">
                Hello there! I'm delighted to introduce myself as a versatile
                artist, specializing in Permanent Makeup (PMU), nail artistry,
                and lash artistry. My passion for these crafts is more tha n
                just a profession - it's a way of life. I pour my heart and soul
                into every meticulous stroke, whether it's creating the perfect
                arch in an eyebrow, crafting an intricate nail design, or
                intensifying the allure of the eyes with expertly applied
                lashes. As a hardworking perfectionist, I believe in the power
                of attention to detail and precision, ensuring that each client
                leaves my chair feeling beautiful, confident, and utterly
                transformed. My enthusiasm for my work fuels my endless pursuit
                of perfection, and I am committed to bringing beauty to life,
                one brushstroke at a time. I look forward to helping you enhance
                your natural beauty with my artistic skills.
              </p>
              <Button variant="outlined" onClick={() => router.push('/about')}>
                Read my story
              </Button>
            </Grid>
          </Grid>
        </section>

        <Divider />

        {/* Blog Section */}
        <section>
          <h1 className="uppercase text-center">Services</h1>
          <hr className="border-blue-500 max-w-[15%] mx-auto" />
          <Box
            className="container mx-auto"
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap={2}
          >
            <ListOfProducts />
          </Box>
        </section>

        <Divider />

        {/* Blog Section */}
        <section>
          <h1 className="uppercase text-center">Latest Posts</h1>
          <hr className="border-blue-500 max-w-[15%] mx-auto" />
          <PostList blogPostList={blogPostList} />
        </section>
      </PageContentWrapper>
    </>
  );
};

export async function getStaticProps() {
  const { results } = await getDatabase(`${process.env.DATABASE_ID}`);

  return {
    props: {
      blogPostList: results.slice(0, 3),
    },
    revalidate: 1,
  };
}

export default Index;
