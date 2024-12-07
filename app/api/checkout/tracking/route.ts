export const POST = async (request: Request) => {
  // if (!req.auth) {
  //   return Response.json({ message: 'Unauthorized' }, { status: 401 });
  // }

  // const body = await req.json();
  // await connectDB();

  // const { plan } = body;
  // if (!plan) return Response.json({ success: false }, { status: 400 });

  // const user = await User.findOne({ email: req.auth.user?.email }).select('-password');
  // if (!user) {
  //   throw new Error('User not found');
  // }

  // user.plan = plan;
  // await user.save();

  // return Response.json({ success: true, user });
};
