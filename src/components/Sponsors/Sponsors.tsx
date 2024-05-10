import Marquee from 'react-fast-marquee';

import { Sponsor } from '~/ui/components/atoms';

import * as S from './Sponsors.style';

import { data } from './Sponsors.data';

export const Sponsors = () => {
  return (
    <S.Sponsors>
      <Marquee pauseOnHover gradientColor="248, 248, 248">
        <S.SponsorContainer direction="row" align="center" gap="5rem">
          {data.map((d, i) => (
            <Sponsor image={d.image} href={d.href} name={d.name} key={i} />
          ))}
        </S.SponsorContainer>
      </Marquee>
    </S.Sponsors>
  );
};
