import React from "react";

import Paper from '@material-ui/core/Paper';
import Button from 'components/CustomButtons/Button.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)


export default function ContactSocial() {

  return (
      <div className="social-wrapper">
          <Paper elevation={3} className="social-paper">
              <div className="social-header">
                  Or you can reach me here
              </div>
              <div className="social-item-wrapper">
                  <div className="social-item">
                      <Button color="linkedin" href="https://www.linkedin.com/in/jaspalsingh94/" >
                          <FontAwesomeIcon icon={['fab', 'linkedin']} className="svg-inline--fa.fa-w-14" />
                          <span className="social-text">&nbsp; Connect with &nbsp;</span><span>Linkedin</span>
                      </Button>
                  </div>
                  <div className="social-item">
                      <Button color="github" href="https://github.com/jsinghw">
                          <FontAwesomeIcon icon={['fab', 'github']} className="svg-inline--fa.fa-w-16" />
                          <span className="social-text">&nbsp; Connect with &nbsp;</span><span>Github</span>
                      </Button>
                  </div>
              </div>
          </Paper>
      </div>
  );
}
