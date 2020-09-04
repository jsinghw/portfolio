import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from 'components/CustomButtons/Button.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)


export default function ContactSocial() {

  return (
      <div className="social-wrapper">
          <GridContainer justify="center" alignItems="center">
            <GridItem xs={6}>
                <Button color="linkedin" href="https://www.linkedin.com/in/jaspalsingh94/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="svg-inline--fa.fa-w-14" />Connect with linkedin
                </Button>
            </GridItem>
            <GridItem xs={6}>
            <Button color="github" href="https://github.com/jsinghw">
                <FontAwesomeIcon icon={['fab', 'github']} className="svg-inline--fa.fa-w-16" />Connect with Github
            </Button>
            </GridItem>
          </GridContainer>
      </div>
  );
}
