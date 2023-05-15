
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import s from '@/styles/cv/CV.module.css'
import Link from "next/link";
import { GraphQLClient, gql } from 'graphql-request'



const graphcms = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/clh4zdcwq5s5p01ue7mgtbapo/master')
const QUERY = gql`
 query Post($slug: String!) {
    post(where: {slug: $slug}) {
        name
        profession
        excerpt
        experiences
        experience
        workYears
        aboutMe
        category
        coverImage {
            url
        }
        awards {
            html
        }
        awardsImg{
            url
        }
        advancedSkills
        skills
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

const TeamMemberPage = ({ post }) => {

  return (
    <>
      <Header/>
      {post && (
        <>
            <div className={`container ${s.page_nav}`}>
                <Link href='/'>Main Page</Link>
                <Link href='/team'>
                    <li>Team</li>
                </Link>
                <Link href='#'>
                    <li>{post.name}</li>
                </Link>
            </div>

            <div className={`container ${s.cv_section}`}>

                <div className={s.person_header}>
                    <div className={s.header_logo}>
                        <img src={post.coverImage?.url} alt="" />
                        <div>
                            <div className={s.name_block}>
                                <h1>{post.name}</h1>
                                <h2>{post.profession}</h2>
                            </div>
                            <h3>{post.excerpt}</h3>
                        </div>
                    </div>
                    <div className={s.person_link}>
                        <div className={s.contact}>
                            <p>Contacts</p>
                        </div>
                        <div className={s.social}>
                            <p>Social media</p>
                        </div>
                    </div>
                </div>

                <div className={s.experience_block}>
                    <div className={s.exp_header}>
                        {post.experience && (
                        <>
                            <h3>Work experience <span>{post.experience} years</span></h3>
                            <p>{post.workYears}</p>
                        </>
                        )}
                    </div>
                    {post.experiences && post.experiences.jobs && post.experiences.jobs.map((job, index) => (
                    <div key={index} className={s.experience}>
                        <div>
                            <h4>{job.title}</h4>
                            <h5>{job.duration}</h5>
                            <h6 className={s.company}>{job.company}</h6>
                        </div>
                        <p>{job.description}</p>
                        <span className={s.etc}>etc.</span>
                    </div>
                    ))}
                </div>

                <div className={s.about_block}>
                    <div className={s.about}>
                        <h2>About me</h2>
                        <p className={s.about_p}>{post.aboutMe}</p>
                        <div className={s.skills_block}>
                            <h3>
                                <span>Hard & </span>
                                <span>Soft </span>
                                skills
                            </h3>
                            <div className={s.skills}>
                                {post.skills && post.skills.hard && post.skills.hard.map((skill, index) => (
                                    <p key={index} className={s.hard}>{skill}</p>
                                ))}
                                {post.skills && post.skills.soft && post.skills.soft.map((skill, index) => (
                                    <p key={index} className={s.soft}>{skill}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={s.about_image}>
                        <img src="./assets/images/cv-photo.png" alt="" />
                    </div>
                </div>

                <div className={s.more_info}>
                    <div className={s.advanced}>
                        <h2><span>Advanced</span> skills</h2>
                        <div>
                            <div className={s.adv_blocks}>
                                <h3>Languages</h3>
                                <div className={s.languages}>
                                    {post.advancedSkills && post.advancedSkills.advancedLanguages && post.advancedSkills.advancedLanguages.map((lang, index) => (
                                    <p key={index}>
                                        {lang.language} <span>{lang.level}</span>
                                    </p>
                                    ))}
                                </div>
                            </div>

                            {post.advancedSkills && post.advancedSkills.advancedEducation && post.advancedSkills.advancedEducation.length > 0 && (
                                <div className={s.adv_blocks}>
                                    <h3>Education</h3>
                                    <div className={s.education}>
                                        {post.advancedSkills.advancedEducation.map((edu, index) => (
                                            <div key={index}>
                                                <p>{edu.description}</p>
                                                <span>{edu.p}</span>
                                            </div>
                                        ))}
                                    </div>  
                                </div>
                            )}

                            {post.advancedSkills && post.advancedSkills.additionalEducations && post.advancedSkills.additionalEducations.length > 0 && (
                                <div className={s.adv_blocks}>
                                    <h3>Additional education</h3>
                                    <div className={s.education}>
                                        {post.advancedSkills.additionalEducations.map((edu, index) => (
                                            <div key={index}>
                                                <p>{edu.education}</p>
                                                <span>{edu.p}</span>
                                            </div>
                                        ))}
                                    </div>  
                                </div>
                            )}

                        </div>
                    </div>
                    {
                        post.awards === null ? (  
                            <div className={s.awards}>
                                <h2>Awards & Achievements</h2>
                                <p className={s.comming}>They are not there yet, but they will definitely be soon! 💪</p>
                            </div>  
                        ) : (
                            <div className={s.awards}>
                                <h2>Awards & Achievements</h2>
                                <div>
                                    <div className={s.awards_content}>
                                        {post.awards?.html ? (
                                            <div dangerouslySetInnerHTML={{ __html: post.awards.html }}></div>
                                        ) : ""}
                                    </div>
                                    <div className={s.rewards_block}>
                                        {
                                            post.awardsImg === null ? null : (
                                                <img src={post.awardsImg.url}/>
                                            )
                                        }
                                        <p>There will be more rewards coming soon!</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    
                </div>  
            </div>
        </>
      )}
      <Footer/>
    </>
  );
};

export default TeamMemberPage
