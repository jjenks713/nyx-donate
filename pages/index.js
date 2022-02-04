import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Carousel from '../components/Carousel'

export default function Home() {


  return (
    <div 
    className='bg-gradient-to-t from-green-100 to-blue-300'
    >
      <Head>
        <title>Donate to Nyx</title>
        <meta name="description" content="Donation page for Nyx" />
        <link rel="icon" href="/paw.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <header className='grid justify-center drop-shadow-xl'><img alt='NYX' src="/LOGO.png"/></header>

      <main className='font-Nanum grid justify-center'>

      <div className='grid justify-center'>
      <Card sx={{ maxWidth: 345 }} className="shadow-lg">
{/*           <CardMedia
            component="img"
            height="500"
            image="/nyx-paint.png"
            alt="NYX"
          /> */}
          <Carousel></Carousel>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              NYX
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
              Hi, Im NYX and Im a big ole derp that likes to play too hard. Last month
              I was rough housing with my cousins and accidentally tore my ACL. My mom is heartbroken
              and wishes she could help me, even though she works 2 jobs and is a freelance artist, but the surgery
              that I need is just too expensive. Please help out my mom so I can get back to destroying her apartment
              </p> <br />
              <p>-- Nyx</p> <br />
            <p> 
            Over the holidays Nyx unfortanetely tore her ACL and is in serious pain. She requires a surgey that is rather 
            expensive but without it her injury will cause serious issues down the line; arthritis, 
            joint pain, lameness, swelling and could even develop bone spurs. <br /><br />
            Please help with any amount you can. Thank you all so much!
            </p>


            </Typography>
          </CardContent>
          <div className='grid justify-center'>
              <p className='text-center'>You can Donate by buying Art <a className='bg-green-100 rounded-md p-1 underline' href="https://www.etsy.com/shop/creepybutcutepress">HERE</a> or you can donate cash below</p>
          </div>

          <CardActions className="grid justify-center">
          <div className='py-3 justify-center flex flex-row flex-wrapper'>
            <div className='flex-1/3 pr-4 text-center'>
              <img src="venmo.png" className='w-24'
              /><br />
              <a className='font-Nanum h-6 rounded-full ... bg-blue-400 px-5 text-black font-bold' href="https://account.venmo.com/u/Mary-Jenkin">Donate</a>
              <img
              className='w-36'
              src="/venmo-qr.png"
              alt="Venmo QR"
              style={{
                paddingTop: '7px'
              }}
              /> 
            </div>
            <div className='flex-1/3 pr-4 text-center'>
              <img src="cashapp.png" className='w-24'
              style={{
                paddingTop: "4px"
              }}
              /><br />
              <a className='font-Nanum h-6 rounded-full ... bg-green-400 px-5 text-black font-bold' href="https://cash.app/$jenkin79">Donate</a>
              <img
              className='w-36'
              src="/cash-app-qr.png"
              alt="Cashapp QR"
              style={{
                paddingTop: '7px'
              }}
              /> 
            </div>
            <div className='flex-1/3 text-center'>
              <img src="/paypal.png" className='w-24'/><br />
              <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="business" value="5T5XGCP67NT6W" />
              <input type="hidden" name="no_recurring" value="1" />
              <input type="hidden" name="item_name" value="Donate to NYX Surgery fund. Help a pup in need" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="DONATE with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
              <img className='w-36' src="/paypal-qr.png" alt="Paypal QR" /> 
            </div>
  
          </div>
       
          </CardActions>
        </Card>

      </div>


      <div className="max-w-sm rounded overflow-hidden mx-5 my-5 shadow-lg bg-gradient-to-b from-green-100 to-blue-300">
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2 underline decoration-1">Please help this Pup get the care that she Needs!!!</div>

          <div className='grid justify-center py-3 shadow-xl'>
            <Typography className="text-center" id="non-linear-slider" gutterBottom>
              <h1 className="uppercase font-bold leading-snug text-center text-black text-l py-1">Goal</h1>
              </Typography>
              <div className='flex flex-row justify-between px-3'>
                <a>
                  $0
                </a>
                <a>
                  $4000
                </a>
                </div><br /><br />

                <div className="grid justify-center">
                  <Slider
                      className="w-80"
                      style={{
                        width: "250px"
                      }}
                      value={250}
                      min={0}
                      step={400}
                      max={4000}
                      aria-labelledby="non-linear-slider"
                      valueLabelDisplay="on"
                    />
                </div>
          </div>

        </div>
        <div className="px-6 pt-4 pb-2">
        <div className='grid justify-center py-4'>
          <h1 className='grid justify-center' >Share:</h1>
            <div className='flex flex-row flex-wrap justify-between py-3'>
                <a className='basis-1/5' href="https://www.facebook.com/sharer/sharer.php?u=https://www.nyx-donation.com/"><img width={"25px"} src="/facebook.png" alt="Facebook"/></a>
                <a className='basis-1/5' href="https://twitter.com/intent/tweet?url=https://www.nyx-donation.com/&text="><img width={"25px"} src="/twitter.svg" alt="Twitter"/></a>
{/*                 <a className='basis-1/5' href="https://pinterest.com/pin/create/button/?url=https://www.nyx-donation.com/&media=&description="><img width={"25px"} src="/pinterest.png" alt="Pinterest"/></a>
                <a className='basis-1/5' href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.nyx-donation.com/"><img width={"25px"} src="/linkedin.svg" alt="LinkedIn"/></a> */}
                <a className='basis-1/5' href="mailto:info@example.com?&subject=&cc=&bcc=&body=https://www.nyx-donation.com/%0A"><img width={"25px"} src="/email.svg" alt="Email"/></a>
            </div>
            <div className='text-center'>Copy Link: <br/> <a>https://www.nyx-donation.com/</a></div>

        </div>
        </div>
      </div>


{/*         <div className='py-10 justify-center flex flex-row flex-wrapper'>
          <div className='flex-1/4 p-4 justify-center'>
            Venmo<br />
            <Button className='rounded-full ... bg-green-500 px-5 text-black' href="https://account.venmo.com/u/Mary-Jenkin">Donate</Button>
            </div>
          <div className='flex-1/4 p-4 justify-center'>
            <a>Paypal</a>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="5T5XGCP67NT6W" />
          <input type="hidden" name="no_recurring" value="1" />
          <input type="hidden" name="item_name" value="Donate to NYX Surgery fund. Help a pup in need" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          <img src="/paypal-qr.png" alt="Paypal QR" />
          </div>

        </div> */}

      </main>
    </div>
  )
}
