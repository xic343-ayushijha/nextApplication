import { NextResponse } from 'next/server';

const userData = {
  name:"john doe",
  phoneNo:9089089088,
  address:"new delhi",
  company:"infinity",
  country:"india"
}
export async function GET() {
  return NextResponse.json(userData);
}

export async function POST() {
  return NextResponse.json(userData);
}