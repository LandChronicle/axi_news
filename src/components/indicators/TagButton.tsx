interface TagButtonProps {
  text: string
  href: string
  onClick?: () => void
}

export default function TagButton({ text, href, onClick }: TagButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="inline-flex items-center justify-center cursor-pointer transition-opacity hover:opacity-70"
      style={{
        minWidth: '57px',
        height: '29px',
        paddingTop: '5px',
        paddingRight: '10px',
        paddingBottom: '5px',
        paddingLeft: '10px',
        gap: '10px',
        transform: 'rotate(0deg)',
        opacity: 1,
        borderRadius: '8px',
        border: '1px solid #D11C36',
        whiteSpace: 'nowrap',
        fontFamily: 'Noto Sans',
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: '14px',
        lineHeight: '100%',
        letterSpacing: '0%',
        textDecoration: 'underline',
        textDecorationStyle: 'solid',
        textDecorationThickness: '0%',
        textDecorationSkipInk: 'auto'
      }}
    >
      #{text}
    </a>
  )
}