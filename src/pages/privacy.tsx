import Head from "next/head";

export default function Privacy() {
    return (
        <>
            <Head>
                <title>Farabi Ahnaf Akib - privacy & terms of use</title>
                <meta name="description" content="Privacy & terms of use" />
            </Head>
            <main className="container mx-auto tracking-wider space-y-4">
                <div className="space-y-2">
                    <div className="text-4xl mb-2">Privacy Policy</div>
                    <p>I do not collect or store any personal data.</p>
                    <p>Third-party services (such as advertising or distribution platforms) use their privacy policy, which can be found on their websites.</p>
                    <p>To improve the quality of services, anonymized statistical and technical information (e.g. hardware information) may be collected.</p>
                </div>
                <div>
                    <div className="text-4xl mb-2">Terms of Use</div>
                    <p>{'The software is provided "as is" without warranty of any kind. I am not responsible for any damage caused in any way. By using the software, you agree to these terms.'}</p>
                </div>
            </main>
        </>
    );
}