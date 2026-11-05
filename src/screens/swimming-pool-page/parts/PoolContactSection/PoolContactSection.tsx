import { Bus, Car, Envelope, Phone } from '@phosphor-icons/react';

import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';
import { MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';

import { BorderedLabelText } from '../../components/BorderedLabelText';

import * as S from './PoolContactSection.style';

export function PoolContactSection() {
  const { location, contactPerson, contact } = useSwimmingPoolConfig();

  return (
    <S.ContactSection>
      <MaxWidth>
        <S.ContactHeadline>Kontakt</S.ContactHeadline>

        <S.SectionRow>
          <S.Column>
            <VerticalStack gap="1.2rem">
              <S.ContactSubheadline>Kde plaveme</S.ContactSubheadline>
              {location.image && (
                <S.ImageContainer>
                  <S.Image
                    fill
                    alt={location.imageAlt ?? ''}
                    src={location.image}
                  />
                </S.ImageContainer>
              )}
              <S.TextContainer>
                <Text variant="body3">{location.address}</Text>
                {location.description && (
                  <Text variant="body2">{location.description}</Text>
                )}
              </S.TextContainer>
            </VerticalStack>

            {(location.parking || location.publicTransport) && (
              <S.BorderedItemsContainer>
                {location.parking && (
                  <BorderedLabelText
                    label="Parkování"
                    description={location.parking}
                    icon={Car}
                  />
                )}
                {location.publicTransport && (
                  <BorderedLabelText
                    label="MHD"
                    description={location.publicTransport}
                    icon={Bus}
                  />
                )}
              </S.BorderedItemsContainer>
            )}
          </S.Column>

          <S.Column>
            <VerticalStack gap="1.2rem">
              <S.ContactSubheadline>Kontaktní osoba</S.ContactSubheadline>
              {contactPerson.image && (
                <S.ImageContainer>
                  <S.Image
                    fill
                    alt={contactPerson.imageAlt ?? contactPerson.name}
                    src={contactPerson.image}
                  />
                </S.ImageContainer>
              )}
              <S.TextContainer>
                <Text variant="body3">{contactPerson.name}</Text>
                {contactPerson.bio && (
                  <Text variant="body2">{contactPerson.bio}</Text>
                )}
              </S.TextContainer>
            </VerticalStack>

            <S.BorderedItemsContainer>
              {contact.phone && (
                <BorderedLabelText
                  label={contact.phone}
                  description={contact.phoneNote}
                  icon={Phone}
                />
              )}
              {contact.email && (
                <BorderedLabelText label={contact.email} icon={Envelope} />
              )}
            </S.BorderedItemsContainer>
          </S.Column>
        </S.SectionRow>
      </MaxWidth>
    </S.ContactSection>
  );
}
