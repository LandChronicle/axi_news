interface CategoryLabelProps {
  text: string
  backgroundColor?: string
  textColor?: string
  position?: 'absolute' | 'relative'
}

export default function CategoryLabel({
  text,
  backgroundColor = '#F83A47',
  textColor = '#FFFFFF',
  position = 'absolute'
}: CategoryLabelProps) {
  return (
    <span
      style={{
        width: '79px',
        height: '32px',
        padding: '5px 10px',
        borderRadius: '8px',
        background: backgroundColor,
        position: position,
        top: position === 'absolute' ? '16px' : undefined,
        left: position === 'absolute' ? '16px' : undefined,
        zIndex: position === 'absolute' ? 10 : undefined,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        fontSize: '16px',
        color: textColor
      }}
    >
      {text}
    </span>
  )
}