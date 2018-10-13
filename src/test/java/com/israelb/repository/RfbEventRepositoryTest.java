package com.israelb.repository;

import com.israelb.PlayingWithAngularApp;
import com.israelb.bootstrap.RfbBootstrap;
import com.israelb.domain.RfbEvent;
import com.israelb.domain.RfbLocation;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;

import static junit.framework.TestCase.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {PlayingWithAngularApp.class})
public class RfbEventRepositoryTest extends AbstractRepositoryTest {
    @Before
    public void setUp() throws Exception {
        RfbBootstrap rfbBootstrap = new RfbBootstrap(rfbLocationRepository, rfbEventRepository,
            rfbEventAttendanceRepository, userRepository, authorityRepository);
    }

    @Test
    public void findAllByRfbLocationAndEventDate() throws Exception {
        RfbLocation aleAndTheWitch = rfbLocationRepository.findByLocationName("St Pete - Ale and the Witch");

        assertNotNull(aleAndTheWitch);

        RfbEvent event = rfbEventRepository.findByRfbLocationAndEventDate(aleAndTheWitch, LocalDate.now());

        assertNotNull(event);

    }

}

