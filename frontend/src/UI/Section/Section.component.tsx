import * as UI from './Section.styles';

interface ISectionProps {
  title: string;
  description?: string;
  outerText?: string;
  innerText?: string;
  authTypeHandler?: () => void;
  children: any;
}

export const Section: React.FC<ISectionProps> = ({
  title,
  description,
  outerText,
  innerText,
  authTypeHandler,
  children,
}) => {
  return (
    <UI.SectionWrapper>
      <UI.Section>
        <UI.Title>{title}</UI.Title>
        <UI.Description>{description}</UI.Description>
        {children}
      </UI.Section>
      <UI.OuterText>
        {outerText}
        <UI.InnerText onClick={authTypeHandler}>{innerText}</UI.InnerText>
      </UI.OuterText>
    </UI.SectionWrapper>
  );
};
