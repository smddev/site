import React from 'react'
import styled from 'styled-components'
import {Link1} from '../atoms'

const Wrap = styled.div`
  margin: 28px 0 40px;
`

const Name = styled.p`
  margin: 0 0 8px;
  color: ${p => p.theme.colors.white[0]};
  font-size: ${p => p.theme.fontSizes[10]}px;
  line-height: ${p => p.theme.lineHeights[10]};

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    line-height: ${p => p.theme.lineHeights[3]};
  }
`

const Address = styled.p`
  margin: 0 0 18px;
  color: ${p => p.theme.colors.gray[2]};
  font-size: ${p => p.theme.fontSizes[10]}px;
  line-height: ${p => p.theme.lineHeights[10]};

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    line-height: ${p => p.theme.lineHeights[3]};
  }
`

const Table = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
  row-gap: 10px;
`

const Label = styled.div`
  color: ${p => p.theme.colors.gray[2]};
  font-size: ${p => p.theme.fontSizes[10]}px;
  line-height: ${p => p.theme.lineHeights[10]};
  white-space: normal;
  overflow-wrap: anywhere;

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    line-height: ${p => p.theme.lineHeights[3]};
  }
`

const Value = styled.div`
  color: ${p => p.theme.colors.white[0]};
  font-size: ${p => p.theme.fontSizes[10]}px;
  line-height: ${p => p.theme.lineHeights[10]};
  white-space: nowrap;

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    line-height: ${p => p.theme.lineHeights[3]};
  }
`

const Email = styled(Link1)`
  display: inline;
`

export default function CompanyDetails() {
  return <Wrap>
    <Name>
      Общество с ограниченной ответственностью "Смарт Дизайн"
    </Name>
    <Address>
      196247, г. Санкт-Петербург, вн. тер. г. Муниципальный Округ Новоизмайловское, пр-кт Ленинский, д. 160 литера А, помещ. 27-Н, офис №402
    </Address>
    <Table>
      <Label>ИНН</Label>
      <Value>7819311668</Value>
      <Label>ОКВЭД</Label>
      <Value>62.01</Value>
      <Label>Email</Label>
      <Value><Email href="mailto:info@smddev.com">info@smddev.com</Email></Value>
      <Label>Код вида деятельности</Label>
      <Value>1.01</Value>
    </Table>
  </Wrap>
}
