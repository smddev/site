import React from 'react'
import styled from 'styled-components'
import {Link1} from '../atoms'

const Wrap = styled.div`
  margin: 28px 0 40px;
`

const Detail = styled.p`
  margin: 0 0 10px;
  color: ${p => p.theme.colors.gray[2]};
  font-size: ${p => p.theme.fontSizes[10]}px;
  line-height: ${p => p.theme.lineHeights[10]};
`

const CompanyName = styled(Detail)`
  margin-bottom: 12px;
`

const Email = styled(Link1)`
  display: inline-block;
  margin-top: 4px;
`

export default function CompanyDetails() {
  return <Wrap>
    <CompanyName>
      Общество с ограниченной ответственностью "Смарт Дизайн"
    </CompanyName>
    <Detail>
      196247, г. Санкт-Петербург, вн. тер. г. Муниципальный Округ Новоизмайловское, пр-кт Ленинский, д. 160 литера А, помещ. 27-Н, офис №402
    </Detail>
    <Detail>ИНН 7819311668</Detail>
    <Detail>ОКВЭД 62.01</Detail>
    <Detail>
      email: <Email href="mailto:info@smddev.com">info@smddev.com</Email>
    </Detail>
    <Detail>Код вида деятельности: 1.01</Detail>
  </Wrap>
}
