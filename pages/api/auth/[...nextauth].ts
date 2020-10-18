import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next'

const options = {
  providers: [
    //Providers.GitHub({
      //clientId: process.env.GITHUB_ID,
      //clientSecret: process.env.GITHUB_SECRET
    //}),
    //Providers.Google({
      //clientId: process.env.GOOGLE_ID,
      //clientSecret: process.env.GOOGLE_SECRET
    //}),
    //Providers.Twitter({
      //clientId: process.env.TWITTER_ID,
      //clientSecret: process.env.TWITTER_SECRET
    //}),
  ],
  secret: process.env.SECRET,
  session: { jwt: true }
}

export default (req: NextApiRequest, res: NextApiResponse ) => NextAuth (req, res, options)
