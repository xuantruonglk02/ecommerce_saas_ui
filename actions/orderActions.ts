export function calculateOrderAmount(plan: string, c = true) {
  if (c) {
    return plan === 'basic' ? 500 : 800;
  } else  {
    return plan === 'basic' ? 5 : 8;
  }
}
