import Analytics from "@/components/cases/Analytics"
import Design from "@/components/cases/Design"
import Development from "@/components/cases/Development"
import Digital from "@/components/cases/Digital"
import Members from "@/components/cases/Members"
import Preview from "@/components/cases/Preview"
import Prodaction from "@/components/cases/Prodaction"
import Stack from "@/components/cases/Stack"
import Form from "@/components/home/Form"
import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import { GraphQLClient, gql } from 'graphql-request'


const graphcms = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/clh546yux60qk01t8c3g66zqz/master')
const QUERY = gql`
 query Post($slug: String!) {
    post(where: {slug: $slug}) {
        title
        excerpt
        tags
        createdAt
        slug
        niche
        coverImage {
            url
        }
        problem
        decision
        stacks
        previewImg {
            url
        }
        also1
        also2
        alsoResult
        design1
        design2
        design3
        design4
        designResult
        development
        tech
        techTitle
        stacks2
        workingHours
        platforms
        digital
        digitalResult
        promoVideo1
        promoVideo2
        reviewsName
        reviewsImg {
            url
        }
        reviewsText
        imageSlider
    }
 }
`

const SLUGLIST = gql`
 {
    posts {
        slug
    }
 }
`

export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST)
    return {
        paths: posts.map((post) => ({params: {slug: post.slug}})),
        fallback: false
    }
}

export async function getStaticProps({params}){
     const slug = params.slug
     const data = await graphcms.request(QUERY, {slug})
     const post = data.post
     return {
        props: {
            post,
        },
        revalidate: 10,
     }
}

const Case = ({post}) => {
    return (
        <main>
            <Header/>

            <Preview cases={post}/>
            <Stack cases={post}/>

            <Analytics cases={post}/>
            <Design cases={post}/>
            <Development cases={post}/>
            <Digital cases={post}/>
            <Prodaction cases={post}/>
            <Members cases={post}/>
            
            <Form/>
            <Footer/>
        </main>
    )
}

export default Case