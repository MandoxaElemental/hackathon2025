import FooterComponent from "@/Components/FooterComponent";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#CBF3F0] min-h-screen">
      {children}
<FooterComponent/>
    </div>
  );
}
