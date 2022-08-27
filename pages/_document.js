import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'

export default function Document() {
  return (
    <Html>
        <Head>
                    <div>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <title>ระบบบริหารจัดการข้อมูล</title>
                        <div>
                       
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" />
                            <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
                        </div>


                    </div>
                </Head>
      <body><Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}