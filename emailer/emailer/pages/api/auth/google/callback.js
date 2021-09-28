import nextConnect from 'next-connect';
import passport from '../../../../lib/passport';

const handler = nextConnect();

handler
  .use()
  .get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/surveys');
  });
export default handler;
